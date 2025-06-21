declare module 'aos' {
  const AOS: {
    init: (options?: {
      duration?: number;
      once?: boolean;
      delay?: number;
      offset?: number;
      easing?: string;
      mirror?: boolean;
      anchorPlacement?: string;
    }) => void;
    refresh: () => void;
  };

  export default AOS;
}
