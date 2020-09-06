import mongoose from 'mongoose';
import bcryt from 'bcrypt';
import User from '../models/user';

// Create User
export function createUser(req, res) {
    const user = new User({
        _id: mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
    });

    return user
        .save()
        .then((newUser) => {
            return res.status(201).json({
                success: true,
                message: 'New user created successfully',
                User: newUser,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            })
        })
}

// Login user
export function loginUser(req, res) {
    const { username, password } = req.body;
    User.findOne({ username: username }, (error, user) => {
        if (user) {
            bcryt.compare(password, user.password, (error, same) => {
                if (same) {
                    //if passwords match
                    // store user session
                    // req.session.userId = user._id;
                    return res.status(201).json({
                        success: true,
                        message: 'User login successfully',
                    });
                }
                else {
                    // This line will update code later
                }
            })
        } else {
            // This line will update code later
        }
    })
}

// Update User
export function updateUser(req, res) {
    const id = req.params.userId;
    const updateObject = req.body;
    const password = req.body.password

    // update it with hash
    bcryt.hash(password, (hash) => {
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