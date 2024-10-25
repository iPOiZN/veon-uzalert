<template>
	<section class="contact">
		<div class="contact__container container">
			<div class="contact__content">
				<div class="contact__block">
					<NuxtImg :src="contact.img" format="webp" class="contact__block-img" height="400px" />
				</div>
				<div class="contact__block">
					<UIHeading level="3" class="contact__title">{{ contact.title }}</UIHeading>
					<span v-dompurify-html="contact.description" class="contact__description"> </span>
					<div class="contact__block-contacts">
						<a
							v-for="(item, i) in contact.contacts"
							:key="i"
							:href="item.href"
							class="contact__block-contacts-link">
							<Icon :name="item.icon" size="24px" />
							<span>{{ item.text }}</span>
						</a>
					</div>
					<div class="contact__block-socials">
						<a
							v-for="(item, i) in contact.socials"
							:key="i"
							:href="item.href"
							class="contact__block-socials-link">
							<Icon :name="item.icon" size="24px" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { contact } from '~/constants/content'
</script>

<style scoped lang="scss">
	.contact {
		&__content {
			display: grid;
            align-items: center;
			grid-template-columns: 1fr 1fr;
			gap: 24px;
			@media (max-width: 767.98px) {
				display: flex;
				flex-direction: column;
			}
		}
		&__title {
			color: var(--orange);
			margin-bottom: 12px;
		}
		&__description {
			:deep(a) {
				color: var(--orange);
			}
		}
		&__block {
			&-contacts {
				display: grid;
				gap: 12px;
				margin-top: 24px;
				&-link {
					display: flex;
					align-items: center;
					gap: 12px;
					font-weight: bold;
                    &:hover{
                        text-decoration: underline;
                    }
					.iconify {
						color: var(--orange);
					}
				}
			}
			&-socials {
				margin-top: 24px;
				display: flex;
				align-items: center;
				gap: 12px;
				&-link {
					display: flex;
					align-items: center;
					gap: 12px;
				}
			}
		}
	}
</style>
