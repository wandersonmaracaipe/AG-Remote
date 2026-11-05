/**
 * Plain-language guidance shown in the pairing panel and after an update. Kept apart from the
 * extension so the wording is tested and the same everywhere. Plain text: callers escape it.
 */

/** Command Palette shortcut as the user's keyboard shows it. */
function palette(platform: string): string {
  return platform === 'darwin' ? 'Cmd+Shift+P' : 'Ctrl+Shift+P';
}

/** "For best results" tips for the pairing panel. */
export function bestResultsTips(platform: string): string[] {
  return [
    `Após instalar ou atualizar o Antigravity Remote, recarregue a janela da IDE (${palette(platform)} → Developer: Reload Window), ou reinicie o Antigravity. O celular se comunica com a extensão ativa nesta janela.`,
    'Mantenha o Antigravity aberto neste computador. O celular controla o agente que executa aqui; nenhum processamento pesado roda no celular.',
    'Celular conectado mas sem conversa visível? Abra seu projeto no Antigravity e continue ou inicie um chat com o agente aqui na IDE.'
  ];
}

/**
 * Message for the first window that starts a new version, or null. The window showing it already
 * runs the new version; other open windows don't until they are reloaded. Not shown on a first install.
 */
export function updateNotice(previousVersion: string | undefined, currentVersion: string): string | null {
  if (!previousVersion || previousVersion === currentVersion) return null;
  return `Antigravity Remote atualizado para ${currentVersion}. Recarregue as outras janelas do Antigravity (Developer: Reload Window) para aplicar a nova versão.`;
}
