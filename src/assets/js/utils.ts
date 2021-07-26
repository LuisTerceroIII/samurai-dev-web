const pageIsLoad = (
  setIsLoading: (value: ((prevState: boolean) => boolean) | boolean) => void,
  setIsLoad: (value: ((prevState: boolean) => boolean) | boolean) => void,
  setIsError: (value: ((prevState: boolean) => boolean) | boolean) => void
) => {
  setIsLoading(false);
  setIsLoad(true);
  setIsError(false);
};

const pageFailOnLoad = (
  setIsLoading: (value: ((prevState: boolean) => boolean) | boolean) => void,
  setIsLoad: (value: ((prevState: boolean) => boolean) | boolean) => void,
  setIsError: (value: ((prevState: boolean) => boolean) | boolean) => void
) => {
  setIsLoading(false);
  setIsLoad(false);
  setIsError(true);
};

const openSite = (url: string): Window => window.open(url);

export { pageIsLoad, pageFailOnLoad, openSite };




