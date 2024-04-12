import * as PresetUtils from '../../core/preset_utils.js';
import { Consumes, Debuffs, Flask, Food, Glyphs, IndividualBuffs, Potions, Profession, RaidBuffs, TristateEffect } from '../../core/proto/common.js';
import {
	PriestPrimeGlyph as PrimeGlyph,
	PriestMajorGlyph as MajorGlyph,
	PriestMinorGlyph as MinorGlyph,
	PriestOptions_Armor,
	ShadowPriest_Options as Options,
} from '../../core/proto/priest.js';
import { SavedTalents } from '../../core/proto/ui.js';
import DefaultApl from './apls/default.apl.json';
import P1Gear from './gear_sets/p1.gear.json';

// Preset options for this spec.
// Eventually we will import these values for the raid sim too, so its good to
// keep them in a separate file.
export const P1_PRESET = PresetUtils.makePresetGear('P1 Preset', P1Gear);

export const ROTATION_PRESET_DEFAULT = PresetUtils.makePresetAPLRotation('Default', DefaultApl);

// Default talents. Uses the wowhead calculator format, make the talents on
// https://www.wowhead.com/cata/talent-calc/priest and copy the numbers in the url.
export const StandardTalents = {
	name: 'Standard',
	data: SavedTalents.create({
		talentsString: '032212--322032210201222100231',
		glyphs: Glyphs.create({
			prime1: PrimeGlyph.GlyphOfShadowWordPain,
			prime2: PrimeGlyph.GlyphOfMindFlay,
			prime3: PrimeGlyph.GlyphOfShadowWordDeath,
			major1: MajorGlyph.GlyphOfFade,
			major2: MajorGlyph.GlyphOfInnerFire,
			major3: MajorGlyph.GlyphOfSpiritTap,
			minor1: MinorGlyph.GlyphOfFading,
			minor2: MinorGlyph.GlyphOfFortitude,
			minor3: MinorGlyph.GlyphOfShadowfiend,
		}),
	}),
};

export const DefaultOptions = Options.create({
	classOptions: {
		armor: PriestOptions_Armor.InnerFire,
	},
});

export const DefaultConsumes = Consumes.create({
	flask: Flask.FlaskOfTheFrostWyrm,
	food: Food.FoodFishFeast,
	defaultPotion: Potions.VolcanicPotion,
	prepopPotion: Potions.VolcanicPotion,
});

export const DefaultRaidBuffs = RaidBuffs.create({
	giftOfTheWild: TristateEffect.TristateEffectImproved,
	powerWordFortitude: TristateEffect.TristateEffectImproved,
	strengthOfEarthTotem: TristateEffect.TristateEffectImproved,
	arcaneBrilliance: true,
	divineSpirit: true,
	trueshotAura: true,
	leaderOfThePack: TristateEffect.TristateEffectImproved,
	icyTalons: true,
	totemOfWrath: true,
	mindQuickening: true,
	sanctifiedRetribution: true,
	bloodlust: true,
	demonicPactSp: 500,
});

export const DefaultIndividualBuffs = IndividualBuffs.create({
	blessingOfKings: true,
	blessingOfWisdom: TristateEffect.TristateEffectImproved,
	blessingOfMight: TristateEffect.TristateEffectImproved,
	vampiricTouch: true,
});

export const DefaultDebuffs = Debuffs.create({
	sunderArmor: true,
	faerieFire: TristateEffect.TristateEffectImproved,
	bloodFrenzy: true,
	ebonPlaguebringer: true,
	heartOfTheCrusader: true,
	judgementOfWisdom: true,
	shadowMastery: true,
});

export const OtherDefaults = {
	channelClipDelay: 100,
	distanceFromTarget: 20,
	profession1: Profession.Engineering,
	profession2: Profession.Tailoring,
};
