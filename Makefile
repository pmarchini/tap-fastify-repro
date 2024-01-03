all:
	for i in {1..1000}; do \
		npm run test; \
	done

broken-debug:
	export ASYNC_HOOK_DOMAIN_DEBUG='1'; \
	npm run test