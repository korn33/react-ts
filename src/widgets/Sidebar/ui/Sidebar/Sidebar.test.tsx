import {fireEvent, screen} from "@testing-library/react"
import {Sidebar} from "widgets/Sidebar";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";

describe('Sidebar', () => {
    test('there is in the dom', () => {
        componentRender(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle sidebar', () => {
        componentRender(<Sidebar/>);
        const button = screen.getByTestId('sidebarToggleButton')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(button)
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
        fireEvent.click(button)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})