import { Table } from 'antd';
import styled from 'styled-components';


export const TableWrapper = styled(Table)`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    max-height: calc(100% -110px);
    overflow-y: auto;
    .ant-table-pagination.ant-pagination{
        margin: 0!important;
    }
`;