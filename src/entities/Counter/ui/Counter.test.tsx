import {fireEvent, screen} from "@testing-library/react"
import {Counter} from "./Counter";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";

describe('Counter', () => {
    // test('there is in the dom', () => {
    //     componentRender(<Counter/>);
    //     expect(screen.getByTestId('counter')).toBeInTheDocument()
    // })
    //
    // test("the same init value", () => {
    //     componentRender(<Counter/>, {
    //         initialState: {
    //             counter: {
    //                 value: 10
    //             }
    //         }
    //     });
    //     expect(screen.getByTestId('counterValue')).toHaveTextContent('10')
    // })

    test("increment", () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        });
        const button = screen.getByTestId('increment-btn')
        fireEvent.click(button)
        expect(screen.getByTestId('counterValue')).toHaveTextContent('11')
    })

    test("decrement", () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        });
        const button = screen.getByTestId('decrement-btn')
        fireEvent.click(button)
        expect(screen.getByTestId('counterValue')).toHaveTextContent('9')
    })

    test("trippleDecrement", () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        });
        const button = screen.getByTestId('decrement-btn')
        fireEvent.click(button)
        fireEvent.click(button)
        fireEvent.click(button)
        expect(screen.getByTestId('counterValue')).toHaveTextContent('7')
    })
})