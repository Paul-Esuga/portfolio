export type ArchiveItem = { title: string; key?: string; artist?: string };
export type ArchiveGroup = { category: string; items: ArchiveItem[] };
export const archive: ArchiveGroup[] = [
 {category:'Film',items:[{title:'That Awkward Moment'},{title:'Oppenheimer'},{title:'The Shawshank Redemption'},{title:'Avengers: Infinity War'}]},
 {category:'Television',items:[{title:'BoJack Horseman',key:'bj'},{title:'How I Met Your Mother',key:'himym'},{title:'Fleabag'},{title:'Game of Thrones'},{title:'Breaking Bad',key:'bb'},{title:'Ben 10'}]},
 {category:'Music',items:[{title:'CALL ME IF YOU GET LOST',artist:'Tyler, The Creator'},{title:'Work of Art',artist:'Asake'},{title:'Laughing So Hard, It Hurts',artist:'MAVI'}]},
 {category:'Podcasts',items:[{title:'I Said What I Said'},{title:'What Now?',artist:'Trevor Noah'}]}
];
