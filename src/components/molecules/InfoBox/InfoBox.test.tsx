import * as React from 'react';
import { render, screen } from '@testing-library/react';
import InfoBox from '@/components/molecules/InfoBox/InfoBox';
import Default from '@/components/molecules/InfoBox/InfoBox.stories';

test('has the correct structure', () => {
    const { children } = Default.args;
    const component = render(<InfoBox {...Default.args}>{Default.args.children}</InfoBox>);
    const boxElement = component.container.children.item(0);

    expect(boxElement).toHaveClass('iom-info-box');
    expect(screen.getByText(children)).toBeInTheDocument();
});
