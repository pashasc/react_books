/**
 * @file bookDetailsActions.js
 * @created by Example
 * @copyright Copyright (c) 2016 Example
 *
 *  The only way to mutate state in a react app is to emit an action. 
 *  An action is a plain javaScript object which describes what happened.
 */

import * as types from 'actions/actionTypes';

export function getBookDetailRequest() {
  return {
    type: types.GET_BOOK_DETAIL_REQUEST
  };
}

export function getBookDetailSuccess(books) {
  return {
    type: types.GET_BOOK_DETAIL_SUCCESS,
    books
  };
}

export function destroyBookDetails() {
  return {
    type: types.DESTROY_BOOK_DETAILS,
  };
}