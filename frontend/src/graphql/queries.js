import { gql } from '@apollo/client';

export const LIST_EMPLOYEES = gql`
    query ListEmployees($page: Int, $limit: Int) {
        listEmployees(page: $page, limit: $limit) {
            id
            name
            age
            class
            subjects
            attendance
        }
    }
`;
