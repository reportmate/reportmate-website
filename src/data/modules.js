// Shared module metadata used by the homepage grid and the features deep-dive.
// `short` is the marketing one-liner; `fields` is the full collection breakdown.
export const modules = [
{
    name: 'Inventory',
    accent: 'bg-amber-50 text-amber-600',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    short: 'Asset tag, assigned owner, department, location, device name, manufacturer, purchase metadata.',
    fields: 'Asset tag, assigned owner, department, location, device name, manufacturer, model, and purchase metadata for asset reconciliation.',
  },
{
    name: 'Installs',
    accent: 'bg-emerald-50 text-emerald-600',
    icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
    short: 'Managed software from Cimian and Munki: target vs installed version, pending, installed, failed, logs.',
    fields: 'Managed software state from Cimian (Windows) and Munki (Macintosh): item name, target vs installed version, pending, installed, failed, plus install-session history and logs.',
  },
{
    name: 'Applications',
    accent: 'bg-blue-50 text-blue-600',
    icon: 'M19 12.2H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V10.2a2 2 0 00-2-2M5 12.2V10.2a2 2 0 012-2m0 0V6.2a2 2 0 012-2h6a2 2 0 012 2v2M7 8.2h10',
    short: 'Installed apps, versions, bundle IDs / product codes, publishers, install dates — Macintosh and Windows.',
    fields: 'Installed applications with version, bundle identifier or product code, publisher, install date and size — normalized across Macintosh and Windows.',
  },
{
    name: 'System',
    accent: 'bg-purple-50 text-purple-600',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    short: 'OS build & patch level, uptime, boot time, kernel, architecture, rapid security responses, locale.',
    fields: 'OS name, version & build, patch level, rapid security responses, uptime, boot time, kernel version, architecture, locale, time zone.',
  },
{
    name: 'Management',
    accent: 'bg-yellow-50 text-yellow-600',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    short: 'MDM enrollment & vendor, supervision, configuration profiles, certificates, managed status.',
    fields: 'MDM enrollment & vendor, supervision, configuration profiles, installed certificates, and managed-status — including profiles collected inline.',
  },
{
    name: 'Identity',
    accent: 'bg-indigo-50 text-indigo-600',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    short: 'Logged-in user, local & directory accounts, home directory, Entra/AD join, shared-device state.',
    fields: 'Console / logged-in user, full name, local and directory accounts, home directory, Entra ID / Active Directory join, and shared-device detection.',
  },
{
    name: 'Hardware',
    accent: 'bg-orange-50 text-orange-600',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    short: 'Model & SoC, performance/efficiency cores, Neural Engine, GPU, RAM with per-module make, storage, battery health.',
    fields: 'Model & model identifier, manufacturer, serial number, CPU/SoC, performance & efficiency core counts, Neural Engine (NPU), GPU, total RAM with per-module manufacturer and type, storage devices, battery health & cycle count, thermals.',
  },
{
    name: 'Peripherals',
    accent: 'bg-cyan-50 text-cyan-600',
    icon: 'M8.8 3.2h6.4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8.8a1 1 0 0 1-1-1V4.2a1 1 0 0 1 1-1zM8.8 7.2h6.4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8.8a2 2 0 0 1-2-2V9.2a2 2 0 0 1 2-2zM10.4 17.2h3.2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3.2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z',
    short: 'Displays, printers, USB and Bluetooth devices — resolution, drivers, default, connection type.',
    fields: 'Displays (resolution, scaling, connection), printers (driver, default, network), and connected USB and Bluetooth devices — displays and printers collected within peripherals.',
  },
{
    name: 'Security',
    accent: 'bg-red-50 text-red-600',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    short: 'FileVault / BitLocker, firewall, SIP, Gatekeeper, secure boot, TPM, XProtect, EDR presence.',
    fields: 'FileVault / BitLocker encryption state, firewall, System Integrity Protection, Gatekeeper, secure/measured boot, TPM, XProtect, and presence of endpoint protection.',
  },
{
    name: 'Network',
    accent: 'bg-teal-50 text-teal-600',
    icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
    short: 'Interfaces, IPv4/IPv6, MAC, DNS, gateways, Wi-Fi SSID with band/channel/width, signal, VPN.',
    fields: 'Active connection, all interfaces, IPv4/IPv6, MAC addresses, DNS servers, gateways, Wi-Fi SSID with band/channel/width/protocol, signal strength, VPN status.',
  },
];
