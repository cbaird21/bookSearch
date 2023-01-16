// hold GET_ME which will execute the `.me` query setu up using the apollo server

import { gql } from '@apollo/client';

// we want to get this query to call the user based off of stored data base characteristics
export const QUERY_TEXH = gql`
    query me {
        user {
            _id
            username
            email
            savedBooks
        }

    }
    `
