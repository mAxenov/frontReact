// Хэш-функция для создания хэша из строки
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Преобразование в 32-битное целое
  }
  return Math.abs(hash);
}

// Функция для генерации цвета из хэша
export function generateColorFromString(str: string): string {
  const hash = hashString(str);
  // Генерируем цвет на основе хэша
  const r = (hash >> 24) & 0xff;
  const g = (hash >> 16) & 0xff;
  const b = (hash >> 8) & 0xff;

  // Преобразуем RGB в шестнадцатеричный цветовой код
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
