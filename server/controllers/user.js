// import required dependencies
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/user';
import Token from '../middleware/token';
export function createUser(req, res) {
    bcrypt.hash(req.body.password, 15, (err, hash) => {
        const password = hash;
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            username: req.body.username,
            email: req.body.email,
            password,
        });
        // check that user submits the required value
        if (!user.username || !user.email || !user.password) {
            return res.status(400).json({
                message: 'Please ensure you fill the username, email, and password',
            });
        }
        // verify the user isn't stored in the database
        return User.count({
            $or: [
                { username: req.body.username },
                { email: req.body.email },
            ],
        })
            .then((count) => {
                if (count > 0) {
                    res.status(401).json({
                        message: 'This user exists',
                    });
                }
                // if user doesn't exist, create one
                return user
                    .save()
                    .then((newUser) => {
                        const token = Token(newUser);
                        res.status(201).json({
                            message: 'User signup successfully',
                            newUser,
                            token,
                        });
                    })
                    .catch(() => {
                        res.status(500).json({
                            message: 'Our server is in the locker room, please do try again.'
                        });
                    });
            });
    });
}

export function loginUser(req, res) {
    const { username, password } = req.body;
    User.findOne({ username })
        .then((existingUser) => {
            bcrypt.compare(password, existingUser.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Not authorized',
                    });
                }
                if (result) {
                    const token = Token(existingUser);
                    return res.status(200).json({
                        message: 'User authorization successful',
                        existingUser: {
                            username: existingUser.username,
                            email: existingUser.email,
                            _id: existingUser.id,
                        },
                        token,
                    });
                }
                return res.status(401).json({
                    message: 'Invalid details',
                });
            });
        })
        .catch(() => res.status(500).json({ message: 'Our server is in the locker room, please do try again.' }));
}

// Update User
export function updateUser(req, res) {
    const id = req.params.userId;
    const updateObject = req.body;
    const password = req.body.password

    // update it with hash
    bcrypt.hash(password, (hash) => {
        console.log('password==>>', password)
        req.body.password = hash

        // then update
        // User.findByIdAndUpdate(req.body, function (err) {

        // });
        User.update({ _id: id }, { $set: updateObject }, { $set: password })
            .exec()
            .then(() => {
                res.status(200).json({
                    success: true,
                    message: 'User is updated',
                    updateUser: updateObject,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'Server error. Please try again.'
                });
            })
        // User.update({ _id: id }, { $set: updateObject })
        //     .exec()
        //     .then(() => {
        //         res.status(200).json({
        //             success: true,
        //             message: 'User is updated',
        //             updateUser: updateObject,
        //         });
        //     })
        //     .catch((err) => {
        //         res.status(500).json({
        //             success: false,
        //             message: 'Server error. Please try again.'
        //         });
    })
}


export default User;