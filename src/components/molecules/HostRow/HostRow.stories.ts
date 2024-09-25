import type { StoryObj, Meta } from '@storybook/react';
import HostRow from '@/components/molecules/HostRow/HostRow';
import { fn } from '@storybook/test';
import NoImage from '@/assets/logo-138.png';

type Story = StoryObj<typeof HostRow>;

const hostDetails = {
    Plattform: 'linux',
    Betriebssystem: 'linux',
    Architektur: 'arm64',
    CPUs: 8,
    Geschwindigkeit: '0 MHz',
    Modell: 'unknown',
    RAM: '23.4 GB',
    'System-Betriebszeit': '01:53:59',
    'Node.js': 'v20.17.0',
    time: 1727081946263,
    NPM: '10.8.2',
    'Adapter-Anzahl': 631,
    Datenträgergröße: '117.3 GB',
    'Freier Festplattenspeicher': '24.9 GB',
    'Aktive Instanzen': 3,
    Pfad: '/opt/iobroker/',
    Betriebszeit: '01:56:06'
};

export default {
    title: 'Molecules/Host Row',
    component: HostRow,
    tags: ['autodocs'],
    args: {
        title: 'Raspberry Pi',
        isExpertMode: false,
        isAlive: true,
        cpu: 69.25,
        ram: 15.23,
        events: '⇥3 / ↦13',
        uptime: '1h',
        installedVersion: '6.0.11',
        availableVersion: '6.0.12',
        details: hostDetails,
        onCopy: fn(),
        updateAvailable: true,
        onUpgrade: fn(),
        noNotifications: 2,
        badgeColor: 'error',
        onOpenNotifications: fn(),
        onEdit: fn(),
        onRestart: fn(),
        onOpenSettings: fn(),
        onChangeLoglevel: fn(),
        loglevel: 'info',
        editTooltip: 'Host bearbeiten',
        loglevelTooltip: 'Log-Stufe info',
        restartTooltip: 'Host neu starten',
        settingsTooltip: 'Host-Basiseinstellungen',
        copyTooltip: 'In die Zwischenablage kopieren',
        upgradeTooltip: 'Aktualisieren',
        notificationsTooltip: 'Host-Benachrichtigungen anzeigen',
        image: NoImage
    },
    argTypes: {}
} satisfies Meta<typeof HostRow>;

export const Default: Story = {};
