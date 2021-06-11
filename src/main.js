import App from './App.svelte'
import BindingText from './1.binding-text.svelte'
import BindingHTML from './2.binding-html.svelte'

 new App({
	target: document.body,
	props: {
		name: 'Uma'
	}
});

new BindingText({target:document.body})

new BindingHTML({target: document.body})
