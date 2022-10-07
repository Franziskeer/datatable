<script setup>
const props = defineProps({
	rowCountModifiers: Object,
	rowCount: Number,
	rowCountItems: Array,
	classes: Object,
});

const emits = defineEmits(['update:rowCount', 'update:currentPage']);

const setRowCount = ($event) => {
	emits('update:rowCount', $event.target.value);
	emits('update:currentPage', 1);
};
</script>

<template>
	<slot v-bind="{ setRowCount, ...props }">
		<div :class="classes.container">
			<label for="rowCountInput" :class="classes.label">Row count:</label>
			<select :value="rowCount" @change="setRowCount" name="rowCountInput" :class="classes.select">
				<option v-for="item in rowCountItems" :value="item">{{ item }}</option>
			</select>
		</div>
	</slot>
</template>
