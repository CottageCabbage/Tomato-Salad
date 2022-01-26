let app = Vue.createApp({
	data: function() {
		return {
			// Tabs Open/Closed
			default_tab: "input_container",
			tab: 'presets_container', // input/timer/presets/settings
			test_var: true,
		}
	},
})


app.component('preset-timer', {
	template: `

		<div class="preset-timer" v-for="(preset, i) in preset_timers">
			
			<span class="preset-title">{{preset.title}}</span>
			
			<div class="preset-content">
				
				<span class="delete-preset">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 \
						2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 \
						11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
					</svg>
				</span>

				<span class="values-go-here">{{preset.work}}:{{preset.short_break}}:{{preset.long_break}}:{{preset.loops}}</span>
				
				<span class="start-preset">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 
						8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
					</svg>
				</span>
			
			</div>
		</div>
	`,

	data() {
		return {
			preset_timers: [
				{work: '25', short_break: '30', long_break: '50', loops: '4', title: "Cirillo's Pomodoro"},
				{work: '30', short_break: '15', long_break: '40', loops: '3', title: "Test"},
				{work: '30', short_break: '15', long_break: '40', loops: '3', title: "Test"},
				{work: '30', short_break: '15', long_break: '40', loops: '3', title: "Test"},
				{work: '30', short_break: '15', long_break: '40', loops: '3', title: "Test"},
				{work: '30', short_break: '15', long_break: '40', loops: '3', title: "Test"},
				{work: '30', short_break: '15', long_break: '40', loops: '3', title: "Test"},	
			]
		}
	}
})


app.mount('#app')
