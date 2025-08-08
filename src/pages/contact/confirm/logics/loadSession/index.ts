type LoadSessionProps = {
  label: string;
};

export const loadSessionData = <T>({ label }: LoadSessionProps) => {
  try {
    const data: T = JSON.parse(sessionStorage.getItem(label) || '');
    return { data };
  } catch (error) {
    console.error('パースエラー:', error);
    return {
      data: undefined,
    };
  }
};
