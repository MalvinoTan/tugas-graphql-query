import { gql } from '@apollo/client';

export const GET_TODOS = gql`
    query getTodos {
        todos {
            id
            isDone
            title
        }
    }
`;

export const GET_TODO_BY_ID = gql`
    query getTodoById($id: Int!) {
        todos(where: {id: {_eq: $id}}) {
            id
            isDone
            title
        }
    }
`;

