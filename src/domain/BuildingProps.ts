interface BuildingProps {
  buildScore: number
  //buildsWhat: UnitType
  buildTime: number
  canBuildAddon: boolean // 추가 건물
  canMove: boolean
  destroyScore?: number //적 제거
  dimensionDown?: number //유닛 중심에서 화면 아래까지 거리
  dimensionLeft?: number //유닛 중심에서 화면 왼쪽까지 거리
  dimensionRight?: number //유닛 중심에서 화면 오른쪽까지 거리
  dimensionUp?: number //유닛 중심에서 화면 위쪽까지 거리
  gasPrice: number
  isAddon: boolean // 장치 건물
  //isBeacon: boolean
  isBuilding: boolean
  isDetector: boolean
  isMineralField: boolean
  isFlyingBuilding: boolean
  isSpell: boolean // 스킬?
  isSpellcaster: boolean // 마나 있는지?
  tileHeight: number
  //tileSize: TilePosition
  tileWidth: number
  requiresCreep: boolean // 저그 오염된 땅이 필요해?
  requiresPsi: boolean // 파일런 공급 필요?
  isRefinery: boolean // 가스정제소?
  isResourceContainer: boolean // 자원 저장 가능?
  isResourceDepot: boolean // 자원저장소?
  canAttack: boolean
  maxAirHits: number // 공중 최대 공격 수
  maxEnergy: number
  maxShields: number
  mineralPrice: number
  regeneratesHP: boolean
  seekRange: number // 적 인지 거리
  sightRange: number // 시야 범위
  spaceProvided: number // 공간 제공, 벙커, 셔틀
  spaceRequired: number // 필요공간
  width: number
}

export default BuildingProps
