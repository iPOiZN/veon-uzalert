<template>
	<section class="contact">
		<div class="contact__container container">
			<div class="contact__content">
				<div class="contact__block">
					<NuxtImg
						:src="contact.img"
						format="webp"
						class="contact__block-img"
						height="400px"
						loading="lazy" />
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
	import { useContent } from '~/constants/content'

	const { contact } = useContent()
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
				text-align: center;
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
			&-img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
			&-contacts {
				display: grid;
				gap: 12px;
				margin-top: 24px;
				@media (max-width: 767.98px) {
					justify-content: center;
				}
				&-link {
					display: flex;
					align-items: center;
					gap: 12px;
					font-weight: bold;
					&:hover {
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
				@media (max-width: 767.98px) {
					justify-content: center;
				}
				&-link {
					display: flex;
					align-items: center;
					gap: 12px;
				}
			}
		}
	}
</style>
