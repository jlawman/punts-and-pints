ALTER TABLE "speaker_recommendations" ADD COLUMN "can_introduce" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "speaker_recommendations" ADD COLUMN "intro_details" text;