import Dictionary from '../../../../interfaces/Dictionary.interface';

type AreaRank = Dictionary<number>;
type Area = AreaRank[];
type AreaDoc = Dictionary<Area>;

export default AreaDoc;
