class createEventController {
  async handle(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const date = req.body.date;
    const schedule = req.body.schedule;
    const street = req.body.street;
    const zip_code = req.body.zip_code;
    const city = req.body.city;
    const district = req.body.district;
    const federated_unit = req.body.federated_unit;
    const number = req.body.number;
    const phone = req.body.phone;
    const creator_id = req.authenticationInfo.user_id;
    const members = req.body.members;
    const categorie = req.body.categorie;
  }
}
