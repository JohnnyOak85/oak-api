import Dictionary from '../../../interfaces/Dictionary.interface';

type PlayerConfigDoc = {
    attributes: string[];
    ranks: Dictionary<string>;
};

export default PlayerConfigDoc;
