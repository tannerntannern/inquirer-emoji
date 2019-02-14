const emoj = require('emoj');

const Choices = require('inquirer/lib/objects/choices');
const InquirerAutocomplete = require('inquirer-autocomplete-prompt');

class InquirerEmoji extends InquirerAutocomplete {
  constructor(question, rl, answers) {
    const questionBase = Object.assign(
      {},
      question,
      { source: (_, input) => emoj(input) },
    );
    super(questionBase, rl, answers);
  }

  search(searchTerm) {
    return super.search(searchTerm).then(() => {
      this.currentChoices.getChoice = (choiceIndex) => {
        const choice = Choices.prototype.getChoice.call(this.currentChoices, choiceIndex);
        return {
          value: choice.value,
          name: choice.name,
          short: choice.name,
        };
      };
    });
  }

  onSubmit(line) {
    super.onSubmit(line);
  }
}

module.exports = InquirerEmoji;
