<template>
  <div>
      <canvas ref="chartCanvas"></canvas>

  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Chart } from 'chart.js';
export default defineComponent({
  name: 'DNPMECLBaton',

data() {
  return {
     
  };
},

mounted() {
  this.renderChart();
},

methods: {
  renderChart() {
    const chartCanvas = this.$refs.chartCanvas;
    const ctx = chartCanvas.getContext('2d');
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'My Dataset',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
});

</script>

<style lang="css" scoped>
canvas{
height: 577px !important;

}

</style>