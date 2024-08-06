import * as React from 'react';
import { render, screen } from '@testing-library/react';
import InfoBox from './InfoBox';
import Default from './InfoBox.stories';

test('has the correct structure', () => {
    const { text } = Default.args;
    const component = render(<InfoBox {...Default.args} />);
    const boxElement = component.container.children.item(0);

    expect(boxElement).toHaveClass('iom-info-box');
    expect(screen.getByText(text)).toBeInTheDocument();
});
