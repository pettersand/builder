<script lang="ts">
    import Icon from "@iconify/svelte";

    /**
     * * Header for data for the Trainer Dashboard
     * TODO: Re-design, plan metrics
    */
</script>

<div class="flex h-52 custom-border-bottom bg-bg">
    <!-- First Area -->
    <div class="custom-border-right flex-1">
      <h2 class="text-lg font-semibold flex items-center mb-4 p-1">
        <Icon
          icon="uis:schedule"
          width="50"
          height="50"
          class="text-accent2"
        />Booking
      </h2>
      <div class="grid grid-cols-2 gap-4 p-2 text-paragraph">
        <p>% of active booked</p>
        <p>Week: 90%</p>
        <p>Month: 94%</p>
        <!-- Add more metrics here -->
      </div>
    </div>
  
    <!-- Second Area -->
    <div class="custom-border-right flex-1">
      <h2 class="text-lg font-semibold flex items-center mb-4 p-1">
        <Icon
          icon="ic:round-business-center"
          width="50"
          height="50"
          class="text-accent2"
        />Business
      </h2>
      <div class="grid grid-cols-2 gap-4 p-2 text-paragraph">
        <p>Income: 50 530,00 kr</p>
        <p>Estimates $ Weekly: 12 000,00 kr</p>
        <p>Progress Bar</p>
        <!-- Add more metrics here -->
      </div>
    </div>
  
    <!-- Third Area -->
    <div class="flex-1">
      <h2 class="text-lg font-semibold flex items-center mb-4 p-1">
        <Icon
          icon="carbon:sales-ops"
          width="50"
          height="50"
          class="text-accent2"
        />Sales
      </h2>
      <div class="grid grid-cols-2 gap-4 p-2 text-paragraph">
        <p>Consultations: 6</p>
        <p>Sales: 4</p>
        <p>New Clients: 2</p>
        <!-- Add more metrics here -->
      </div>
    </div>
  </div>
  