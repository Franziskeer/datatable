<script setup>
import columns from "@lib/data/columns.json";
import rows from "@lib/data/rows.json";
import { DataTable } from "/dist/@franzisker/datatable.es.js";

</script>

<template>
	<div class="container mx-auto py-20">
		<DataTable :columns="columns" :rows="rows">
		</DataTable>
	</div>
</template>
