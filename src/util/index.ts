export function formatTime(time: number): string {
  const d = new Date(time);
  const month: string = (d.getMonth() + 1 + '').padStart(2, '0');
  const day: string = (d.getDate() + '').padStart(2, '0');
  const hour: string = (d.getHours() + '').padStart(2, '0');
  const minute: string = (d.getMinutes() + '').padStart(2, '0');
  const second: string = (d.getSeconds() + '').padStart(2, '0');

  return `${d.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`;
}