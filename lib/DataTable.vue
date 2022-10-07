<script setup>
import { ref, computed } from "vue";
import Heading from "@lib/components/Heading.vue";
import Pagination from "@lib/components/Pagination.vue";
import RowCount from "@lib/components/RowCount.vue";
import { merge } from "@lib/composables";

const props = defineProps({
	columns: {
		type: Array,
		default: [],
	},
	rows: {
		type: Array,
		default: [],
	},
	options: {
		required: false,
		type: Object,
		default: () => ({}),
	},
});

let defaultOptions = {
	title: "Heading title",
	selectable: false,
	visibleBtns: 5,
	rowCount: 5,
	rowCountItems: [5, 10, 25, 50],
	classes: {
		container: "rounded shadow border border-gray-200 bg-white dark:(bg-dark-600 border-gray-600)",
		heading: {
			container: "px-4 py-2 text-xl",
		},
		content: {
			container: "overflow-x-auto",
			table: "w-full text-left",
			thead: "",
			tbody: "",
			tr: "border-b border-gray-200",
			th: "",
			heading: {
				container: "flex items-center justify-start space-x-2 px-4 py-2",
				sortBtn: "w-full",
				title: "text-base font-bold",
			},
			td: "px-4 py-2",
			empty: "px-4 py-2 text-gray-400",
		},
		footer: {
			container: "grid grid-cols-2",
			rowCount: {
				container: "col-span-2 md:(col-span-1 justify-self-start) px-4 py-2 justify-self-center self-center",
				label: "text-sm mr-2",
				select: "pl-2 pr-8 text-sm rounded border-gray-200 dark:(bg-dark-600 border-gray-600)",
			},
			pagination: {
				container: "col-span-2 md:(col-span-1 justify-end) flex justify-center",
				groupBtn: "rounded text-blue-400 mx-4 my-2 ring-2 inline-flex",
				pageBtn: "w-8 h-8 flex items-center justify-center hover:(bg-blue-400 text-white)",
				activeBtn: "bg-blue-400 text-white",
				prevBtn: "rounded-l",
				nextBtn: "rounded-r",
			},
		},
	},
};

const mergedOptions = computed(() => merge(defaultOptions, props.options));
const sortFn = computed(() => {
	return (a, b) => {
		let sorts = {
			asc: a[sortField.value] > b[sortField.value] ? 1 : -1,
			desc: a[sortField.value] < b[sortField.value] ? 1 : -1,
		};
		return sorts[sortDir.value];
	};
});
const sortedRows = computed(() => {
	return sortDir.value ? [...props.rows].sort(sortFn.value) : props.rows;
});
const pagedRows = computed(() => {
	let first = (currentPage.value - 1) * rowCount.value;
	let last = currentPage.value * rowCount.value - 1;
	return sortedRows.value.filter((_, index) => index >= first && index <= last);
});

const rowCount = ref(mergedOptions.value.rowCount);
const currentPage = ref(1);
const sortField = ref(null);
const sortDir = ref(null);
const { container, heading, content, footer } = mergedOptions.value.classes;
</script>

<template>
	<div :class="container">
		<section v-if="mergedOptions.title" :class="heading.container">{{ mergedOptions.title }}</section>

		<section :class="content.container">
			<table :class="content.table">
				<thead :class="content.thead">
					<tr :class="content.tr">
						<th v-for="col in columns" :class="content.th" :width="col.width">
							<Heading v-model:sortField="sortField" v-model:sortDir="sortDir" :column="col" :classes="content.heading">
								<template #default="payload">
									<slot :name="`heading:${col.field}`" v-bind="payload" />
								</template>
							</Heading>
						</th>
					</tr>
				</thead>
				<tbody :class="content.tbody">
					<template v-if="rows.length > 0">
						<tr v-for="row in pagedRows" :class="content.tr">
							<td v-for="col in columns" :class="content.td">
								<slot :name="`field:${col.field}`" v-bind="{ row, col }">{{ row[col.field] }}</slot>
							</td>
						</tr>
					</template>
					<template v-else>
						<div :class="content.empty">No records</div>
					</template>
				</tbody>
			</table>
		</section>

		<section :class="footer.container">
			<RowCount
				v-model:rowCount.number="rowCount"
				@update:currentPage="(value) => (currentPage = value)"
				:rowCountItems="mergedOptions.rowCountItems"
				:classes="footer.rowCount"
			>
				<template #default="payload">
					<slot name="rowCount" v-bind="payload"></slot>
				</template>
			</RowCount>
			<Pagination v-model:currentPage.number="currentPage" :records="rows.length" :rowCount="rowCount" :visibleBtns="mergedOptions.visibleBtns" :classes="footer.pagination">
				<template #default="payload">
					<slot name="pagination" v-bind="payload"></slot>
				</template>
			</Pagination>
		</section>
	</div>
</template>
