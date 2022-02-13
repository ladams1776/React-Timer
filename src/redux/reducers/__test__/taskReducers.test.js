import { FETCH_TASK_BY_ID, FETCH_TASK_BY_ID_RESPONSE_SUCCESS } from "utils/constants";
import { responseTaskReducer } from "../taskReducers";

describe('src/redux/reducers/__test__/taskReducers.test.js', () => {
    describe('taskReducers.ts', () => {

        describe('responseTaskReducer', () => {
            it('should return expected data, when FETCH_TASK_BY_ID is in action.type', () => {
                // Arrange
                const expected = { id: 'expectedID' };
                const action = {
                    type: FETCH_TASK_BY_ID,
                    data: expected
                };

                // Act
                const actual = responseTaskReducer(null, action);

                // Assert
                expect(actual).toEqual(expected);
            });
            it('should return expected data, when FETCH_TASK_BY_ID_RESPONSE_SUCCESS is in action.type', () => {
                // Arrange
                const expected = { id: 'expectedID' };
                const action = {
                    type: FETCH_TASK_BY_ID_RESPONSE_SUCCESS,
                    data: expected
                };

                // Act
                const actual = responseTaskReducer(null, action);

                // Assert
                expect(actual).toEqual(expected);
            });
            it('should return expected data, when PUT_TASK_BY_ID_RESPONSE_SUCCESS is in action.type', () => {
                // Arrange
                const expected = { items: ['expectedID'] };
                const action = {
                    type: FETCH_TASK_BY_ID_RESPONSE_SUCCESS,
                    data: expected
                };

                // Act
                const actual = responseTaskReducer(null, action);

                // Assert
                expect(actual).toEqual(expected);
            });
            it('should return state, when no action.type match', () => {
                // Arrange
                const expected = { items: ['expectedID'] };
                const action = {
                    type: 'NOT_VALID_TYPE',
                    data: expected
                };

                // Act
                const actual = responseTaskReducer(expected, action);

                // Assert
                expect(actual).toEqual(expected);
            });
        });
    });
});