import { defineComponent } from 'vue';

export const ChevronLeftIcon = defineComponent({
	name: 'ChevronLeftIcon',
	setup() {
		return () => (
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
				<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 6l-6 6l6 6" />
			</svg>
		);
	},
});

export const ChevronRightIcon = defineComponent({
	name: 'ChevronRightIcon',
	setup() {
		return () => (
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
				<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6" />
			</svg>
		);
	},
});

export const ChevronsLeftIcon = defineComponent({
	name: 'ChevronsLeftIcon',
	setup() {
		return () => (
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
				<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 7l-5 5l5 5m6-10l-5 5l5 5" />
			</svg>
		);
	},
});

export const ChevronsRightIcon = defineComponent({
	name: 'ChevronsRightIcon',
	setup() {
		return () => (
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
				<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l5 5l-5 5m6-10l5 5l-5 5" />
			</svg>
		);
	},
});

export const SortAscIcon = defineComponent({
	name: 'SortAscIcon',
	setup() {
		return () => (
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
				<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h7m-7 6h7m-7 6h9m2-9l3-3l3 3m-3-3v12" />
			</svg>
		);
	},
});

export const SortDescIcon = defineComponent({
	name: 'SortDescIcon',
	setup() {
		return () => (
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
				<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h9m-9 6h7m-7 6h7m4-3l3 3l3-3m-3-9v12" />
			</svg>
		);
	},
});
