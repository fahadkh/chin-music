import { theme } from '../Theme';

const transitionList = ['margin', 'border-radius'];
const duration = '4s';

test('transition generator [margin, border-radius] 4s', () => {
    expect(theme.transitions.makeTransitions(transitionList, duration)).toBe('margin 4s, border-radius 4s');
});

test('empty transition generator', () => {
    expect(theme.transitions.makeTransitions([], '')).toBe('');
});