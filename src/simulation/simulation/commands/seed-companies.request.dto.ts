import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';

/**
 * Data transfer object for SeedCompanyDto.
 *
 * @remarks Used by: this module.
 */
export class SeedCompanyDto {
  /**
   * The cui value.
   */
  @IsString()
  @IsNotEmpty()
  @Matches(/^(RO)?\d+$/i, {
    message: 'cui must be numeric or RO-prefixed numeric',
  })
  cui!: string;

  /**
   * The name value.
   */
  @IsString()
  @IsNotEmpty()
  name!: string;

  /**
   * The city value.
   */
  @IsString()
  @IsNotEmpty()
  city!: string;

  /**
   * The county value.
   */
  @IsString()
  @IsNotEmpty()
  county!: string;

  /**
   * The address value.
   */
  @IsString()
  @IsNotEmpty()
  address!: string;

  /**
   * The countryCode value.
   */
  @IsOptional()
  @IsString()
  @Matches(/^[A-Za-z]{2}$/)
  countryCode?: string;

  /**
   * The vatPayer value.
   */
  @IsOptional()
  @IsBoolean()
  vatPayer?: boolean;

  /**
   * Trade register number (e.g. "J04/1234/2019"). Generated when omitted.
   */
  @IsOptional()
  @IsString()
  nrRegCom?: string;

  /**
   * Street name of the registered office (`adresa_sediu_social.sdenumire_Strada`).
   */
  @IsOptional()
  @IsString()
  streetName?: string;

  /**
   * Street number of the registered office (`adresa_sediu_social.snumar_Strada`).
   */
  @IsOptional()
  @IsString()
  streetNumber?: string;

  /**
   * Locality of the registered office (`adresa_sediu_social.sdenumire_Localitate`). Defaults to `city`.
   */
  @IsOptional()
  @IsString()
  locality?: string;

  /**
   * County plate code of the registered office (`adresa_sediu_social.scod_JudetAuto`, e.g. "B", "CJ").
   */
  @IsOptional()
  @IsString()
  @Matches(/^[A-Za-z]{1,2}$/)
  countyCode?: string;
}

/**
 * Data transfer object for SeedCompaniesRequestDto.
 *
 * @remarks Used by: src/simulation/simulation/commands/simulation.command.http.controller.ts.
 */
export class SeedCompaniesRequestDto {
  /**
   * The companies value.
   */
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => SeedCompanyDto)
  companies!: SeedCompanyDto[];
}
