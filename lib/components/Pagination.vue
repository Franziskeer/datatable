<script setup>
import { computed } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from '@lib/assets/icons.jsx';

const props = defineProps({
	currentPageModifiers: Object,
	currentPage: Number,
	records: Number,
	rowCount: Number,
	visibleBtns: Number,
	classes: Object,
});

const emits = defineEmits(['update:currentPage']);

const pages = computed(() => Math.ceil(props.records / props.rowCount));
const pagesFiltered = computed(() => {
	let numShown = props.visibleBtns; 
    numShown = Math.min(numShown, pages.value);
    let first = props.currentPage - Math.floor(numShown / 2);
    first = Math.max(first, 1);
    first = Math.min(first, pages.value - numShown + 1);
    return [...Array(numShown)].map((_,i) => i + first);
});

const prev = () => {
	if (props.currentPage > 1) setPage(props.currentPage - 1);
};

const next = () => {
	if (props.currentPage < pages.value) setPage(props.currentPage + 1);
};

const first = () => {
	setPage(1);
};
const last = () => {
	setPage(pages.value);
};

const setPage = (page) => {
	if (page < 1) emits('update:currentPage', 1);
	else if (page > pages.value) emits('update:currentPage', pages.value);
	else emits('update:currentPage', page);
};

const pageBtnClasses = (page) => [props.classes.pageBtn, props.currentPage === page ? props.classes.activeBtn : ''];
</script>

<template>
	<slot v-bind="{ prev, next, first, last, setPage, pageBtnClasses, pagesFiltered, ...props }">
		<div v-if="pages > 0" :class="classes.container" role="group">
			<div :class="classes.groupBtn">
				<button @click="first" :class="[classes.pageBtn, classes.prevBtn]">
					<ChevronsLeftIcon />
				</button>
				<button @click="prev" :class="[classes.pageBtn, classes.prevBtn]">
					<ChevronLeftIcon />
				</button>
				
				<button @click="setPage(page)" v-for="page in pagesFiltered" :class="pageBtnClasses(page)">{{ page }}</button>
				
				<button @click="next" :class="[classes.pageBtn, classes.nextBtn]">
					<ChevronRightIcon />
				</button>
				<button @click="last" :class="[classes.pageBtn, classes.nextBtn]">
					<ChevronsRightIcon />
				</button>
			</div>
		</div>
	</slot>
</template>
