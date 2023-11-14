const PC = 1200;
const TABLET = 768;
const MOBILE = 480;

const onPc = `@media only screen and (min-width: ${PC}px)`;

const onTablet = `@media only screen and (max-width: ${TABLET}px)`;

const onMobile = `@media only screen and (max-width: ${MOBILE}px)`;

export { onPc, onTablet, onMobile };
