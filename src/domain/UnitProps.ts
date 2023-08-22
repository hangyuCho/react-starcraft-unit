interface UnitProps {
  //abilities:  TechType 
  acceleration?: 0 // 가속도
  //airWeapon: WeaponType
  armor?: number
  //armorUpgrade: UpgradeType
  canAttack?: true
  canMove?: true
  //cloakingTech: TechType
  destroyScore?: number //적 제거
  dimensionDown?: number //유닛 중심에서 화면 아래까지 거리
  dimensionLeft?: number //유닛 중심에서 화면 왼쪽까지 거리
  dimensionRight?: number //유닛 중심에서 화면 오른쪽까지 거리
  dimensionUp?: number //유닛 중심에서 화면 위쪽까지 거리
  gasPrice?: number
  //getRace: Race
  //groundWeapon: WeaponType
  //haltDistance?: number
  hasPermanentCloak?: false //영구 클로킹
  height?: number // pixel
  isBurrowable?: false // 땅굴
  isCloakable?: false
  isCritter?: false // 중립형 동물?
  isDetector?: false
  //isFlagBeacon: boolean
  isFlyer?: false
  //isHero: boolean
  //isInvincible: boolean //무적?
  isMechanical?: false
  //isNeutral: boolean // 동물 자원 중립?
  isOrganic?: false // 힐이 되는 유닛?
  //isPowerup: boolean
  isRobotic?: false
  //isSpecialBuilding: boolean //
  isSpell?: false // 스킬?
  isSpellcaster?: false // 마나 있는지?
  //isSuccessorOf: boolean
  isTwoUnitsInOneEgg?: false // 알에서 2개 태어나는지?
  isWorker?: false // 
  maxAirHits?: number // 공중 최대 공격 수
  maxEnergy?: number
  maxGroundHits?: number // 지상 최대 공격수
  //maxHitPonumbers: number
  maxShields?: number
  mineralPrice?: number
  producesCreep?: false
  producesLarva?: false
  regeneratesHP?: false
  //requiredTech: TechType
  //requiredUnits: Map<UnitType, number>
  //researchesWhat: TechType 
  seekRange?: number // 적 인지 거리
  sightRange?: number // 시야 범위
  //size: UnitSizeType
  spaceProvided?: number // 공간 제공, 벙커, 셔틀
  spaceRequired?: number // 필요공간
  supplyProvided?: number // 인구 필요량
  supplyRequired?: number // 인구 필요?
  topSpeed?: number
  turnRadius?: number
  //upgrades: UpgradeType
  //upgradesWhat: UpgradeType 	
  //whatBuilds: Map<UnitType, number>
  width?: number
}

export default UnitProps

