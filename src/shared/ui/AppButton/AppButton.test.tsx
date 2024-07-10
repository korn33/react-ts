import {render, screen} from "@testing-library/react"
import {AppButton, ThemeButtonApp} from "./AppButton";

describe('AppButton', () => {
    test('there is in the dom', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('has clear class', () => {
        render(<AppButton theme={ThemeButtonApp.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})