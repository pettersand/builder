<script lang="ts">
    import Icon from "@iconify/svelte";

    /**
     * * Header for data for client Management
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
        />Clients
      </h2>
      <div class="grid grid-cols-2 gap-4 p-2 text-paragraph">
        <p>Shows client data, completions, sessions, etc etc</p>

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
        />Activity
      </h2>
      <div class="grid grid-cols-2 gap-4 p-2 text-paragraph">
        <p>Shows client activity, how many active, and so on</p>

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
        />Attention
      </h2>
      <div class="grid grid-cols-2 gap-4 p-2 text-paragraph">
        <p>Alerts for client actions required</p>
        <p>New program needed for x in y weeks</p>
        <p>Client x has 3 sessions remaining. Create a sales plan?</p>
        <p>Contact x client. 5 weeks since last session</p>

        <!-- Add more metrics here -->
      </div>
    </div>
  </div>
  