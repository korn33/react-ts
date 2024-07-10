import {fireEvent, screen} from "@testing-library/react"
import {Sidebar} from "widgets/Sidebar";
import {renderWithTranslations} from "shared/lib/tests/renderWithTranslations/renderWithTranslations";

describe('Sidebar', () => {
    test('there is in the dom', () => {
        renderWithTranslations(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle sidebar', () => {
        renderWithTranslations(<Sidebar/>);
        const button = screen.getByTestId('sidebarToggleButton')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(button)
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
        fireEvent.click(button)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})