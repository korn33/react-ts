import {classNames} from "./classNames";

describe('classNames', () => {
    test('with only one parameter', () => {
        expect(classNames('className_mock')).toBe('className_mock')
    })
    test('with additional classes', () => {
        const expected = 'className_zero class1 class2'
        expect(classNames('className_zero', {}, ['class1', "class2"])).toBe(expected)
    })
    test('with two modes true', () => {
        const expected = 'className_zero class1 class2 scrollable hovered'
        expect(classNames(
            'className_zero',
            {scrollable: true, hovered: true},
            ['class1', "class2"]))
            .toBe(expected)
    })
    test('with modes true and false', () => {
        const expected = 'className_zero class1 class2 scrollable'
        expect(classNames(
            'className_zero',
            {scrollable: true, hovered: false},
            ['class1', "class2"]))
            .toBe(expected)
    })
    test('with modes true and undefined', () => {
        const expected = 'className_zero class1 class2 scrollable'
        expect(classNames(
            'className_zero',
            {scrollable: true, hovered: undefined},
            ['class1', "class2"]))
            .toBe(expected)
    })
})