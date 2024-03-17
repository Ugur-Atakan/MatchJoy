type GamePlatform = 'PC' | 'Xbox' | 'PlayStation' | 'Nintendo Switch' | 'Mobile' | 'VR' | 'AR' | 'Web' | 'Other';
type GameRole = 'Tank' | 'DPS' | 'Healer' | 'Support' | 'Sniper' | 'Scout' | 'Engineer' | 'Builder' | 'Mage' | 'Warrior' | 'Rogue' | 'Bard' | 'Summoner' | 'Other';
type PlayerStyle = 'Aggressive' | 'Defensive' | 'Tactical' | 'Support' | 'Scout' | 'Builder' | 'Engineer' | 'Sniper' | 'Mage' | 'Warrior' | 'Rogue' | 'Bard' | 'Summoner' | 'Other';

interface UserGameInfo {
  gameName: string;
  platforms: GamePlatform[];
  playerStyles: PlayerStyle[];
  role: GameRole[];
}

interface ThirdPartyAccounts {
  steam?: string;
  discord?: string;
  xbox?: string;
  playstationNetwork?: string;
  nintendo?: string;
}

interface GamerProfile {
  gameInfos: UserGameInfo[];
  thirdPartyAccounts: ThirdPartyAccounts;
  playTimes?: {
    start: string; // e.g., "18:00"
    end: string; // e.g., "23:00"
  };
  preferredCommunicationChannel?: 'Discord' | 'Steam Chat' | 'Xbox Live' | 'PlayStation Network' | 'Nintendo Network' | 'In-Game Chat' | 'Voice Chat' | 'Text Chat' | 'Voice Call' | 'Video Call' | 'Phone Call' | 'Email' | 'SMS' | 'Social Media' | 'Forum' | 'Other';
}

export type Character = {
  id: string;
  fullName: string;
  username: string;
  birthDate: string;
  profile_image: string;
  gamerProfile: GamerProfile;
}
