<script setup>
import { SortAscIcon, SortDescIcon } from '@lib/assets/icons.jsx';

const props = defineProps({
	sortField: String,
	sortDir: String,
	column: Object,
	classes: Object,
});

const emits = defineEmits(['update:sortField', 'update:sortDir']);

const setSort = (field, direction) => {
	emits('update:sortDir', direction);
	emits('update:sortField', field);
};

const getNewDirection = () => {
	const sorts = [null, 'asc', 'desc'];
	let index = sorts.indexOf(props.sortDir) + 1;
	return sorts[index % sorts.length];
};
</script>

<template>
	<slot v-bind="{ setSort, getNewDirection, ...props }">
		<button v-if="column.sortable" @click="setSort(column.field, getNewDirection())" :class="classes.sortBtn">
			<div :class="classes.container">
				<span :class="classes.title">{{ column.label }}</span>
				<template v-if="sortField === column.field">
					<SortAscIcon v-if="sortDir === 'asc'" />
					<SortDescIcon v-else-if="sortDir === 'desc'" />
				</template>
			</div>
		</button>
		<div v-else :class="classes.container">
			<span :class="classes.title">{{ column.label }}</span>
		</div>
	</slot>
</template>
