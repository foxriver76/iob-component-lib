import * as React from 'react';
import { render, screen } from '@testing-library/react';
import HostRow from '@/components/molecules/HostRow/HostRow';
import Default from '@/components/molecules/HostRow/HostRow.stories';

test('has the correct structure', () => {
    const component = render(<HostRow {...Default.args} />);
    const rowElement = component.container.children.item(0);

    expect(rowElement).toHaveClass('iom-host-row');

    const cardHeader = rowElement!.children[0].children[0];
    expect(cardHeader).toHaveClass('iom-host-row__header--active');

    expect(screen.getByText(Default.args.title)).toBeInTheDocument();
    expect(screen.getByText(`${Default.args.cpu} %`)).toBeInTheDocument();
    expect(screen.getByText(`${Default.args.ram} %`)).toBeInTheDocument();
    expect(screen.getByText(Default.args.events)).toBeInTheDocument();
});
