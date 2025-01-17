import * as PresetUtils from '../../core/preset_utils';
import { Conjured, Consumes, Debuffs, Flask, Food, Glyphs, Potions, Profession, RaidBuffs, Spec, UnitReference} from '../../core/proto/common';
import {
	ArcaneMage_Options as MageOptions,
	MageMajorGlyph as MajorGlyph,
	MageMinorGlyph as MinorGlyph,
	MagePrimeGlyph as PrimeGlyph,
} from '../../core/proto/mage';
import { SavedTalents } from '../../core/proto/ui';
import ArcaneApl from './apls/arcane.apl.json';
import P1ArcaneGear from './gear_sets/p1_arcane.gear.json';

// Preset options for this spec.
// Eventually we will import these values for the raid sim too, so its good to
// keep them in a separate file.
export const ARCANE_P1_PRESET = PresetUtils.makePresetGear('Arcane P1 Preset', P1ArcaneGear, { talentTree: 0 });

/* export const DefaultSimpleRotation = MageRotation.create({
	only3ArcaneBlastStacksBelowManaPercent: 0.15,
	blastWithoutMissileBarrageAboveManaPercent: 0.2,
	missileBarrageBelowManaPercent: 0,
	useArcaneBarrage: false,
}); */

//export const ROTATION_PRESET_SIMPLE = PresetUtils.makePresetSimpleRotation('Simple Default', Spec.SpecArcaneMage, DefaultSimpleRotation);
export const ARCANE_ROTATION_PRESET_DEFAULT = PresetUtils.makePresetAPLRotation('Arcane', ArcaneApl, { talentTree: 0 });
//export const ARCANE_ROTATION_PRESET_AOE = PresetUtils.makePresetAPLRotation('Arcane AOE', ArcaneAoeApl, { talentTree: 0 });

// Default talents. Uses the wowhead calculator format, make the talents on
// https://wowhead.com/cata/talent-calc and copy the numbers in the url.
export const ArcaneTalents = {
	name: 'Arcane',
	data: SavedTalents.create({
		talentsString: '303322021230122210121-23-03',
		glyphs: Glyphs.create({
			prime1: PrimeGlyph.GlyphOfArcaneBarrage,
			prime2: PrimeGlyph.GlyphOfArcaneBlast,
			prime3: PrimeGlyph.GlyphOfMageArmor,
			major1: MajorGlyph.GlyphOfEvocation,
		}),
	}),
};

export const DefaultArcaneOptions = MageOptions.create({
	classOptions: {
	},
	focusMagicPercentUptime: 99,
	focusMagicTarget: UnitReference.create(),
});

export const DefaultRaidBuffs = RaidBuffs.create({
	arcaneBrilliance: true,
	bloodlust: true,
	markOfTheWild: true,
	icyTalons: true,
	moonkinForm: true,
	leaderOfThePack: true,
	powerWordFortitude: true,
	strengthOfEarthTotem: true,
	trueshotAura: true,
	wrathOfAirTotem: true,
	demonicPact: true,
	blessingOfKings: true,
	blessingOfMight: true,
	communion: true,
});

export const DefaultArcaneConsumes = Consumes.create({
	flask: Flask.FlaskOfTheDraconicMind,
	food: Food.FoodSeafoodFeast,
	defaultPotion: Potions.VolcanicPotion,
	prepopPotion: Potions.VolcanicPotion,
});

export const DefaultDebuffs = Debuffs.create({
    ebonPlaguebringer: true,
    shadowAndFlame: true,
    judgement: true,
});

export const OtherDefaults = {
	distanceFromTarget: 20,
	profession1: Profession.Engineering,
	profession2: Profession.Tailoring,
};
