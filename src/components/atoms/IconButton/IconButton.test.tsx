import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import IconButton from '@/components/atoms/IconButton/IconButton';
import Default from '@/components/atoms/IconButton/IconButton.stories';

test('emits onClick event', () => {
    const onClick = jest.fn();
    const component = render(<IconButton {...Default.args} onClick={onClick} />);

    const buttonComponent = component.container.querySelector('.MuiButtonBase-root');

    fireEvent.click(buttonComponent!);
    expect(onClick).toHaveBeenCalled();
});
