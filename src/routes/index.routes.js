const { Router } = require("express");
const router = Router();
const User = require("../models/user.model");

router.get("/", (req, res) => {
  res.send("Hello Worldssses");
});

router.post("/create", async (req, res) => {
  const idnumber = await User.findOne({
    numeroIdentificacion: req.body.numeroIdentificacion,
  });
  if (idnumber) {
    return res.status(200).json({
      ok: false,
      data: null,
      error: "usuario ya registrado",
    });
  }

  const user = new User({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    numeroIdentificacion: req.body.numeroIdentificacion,
    programa: req.body.programa,
    modalidadPractica: req.body.modalidadPractica,
    fechaInicio: Date(req.body.fechaInicio),
    fechaFinalizacion: Date(req.body.fechaFinalizacion),
  });
  try {
    const savedUser = await user.save();
    res.json({
      ok: true,
      data: savedUser,
      error: null,
    });
  } catch (error) {
    res.status(400).json({
      ok: true,
      data: null,
      error: error,
    });
  }
});
router.get("/users", async (req, res) => {
  User.find().then((users) => {
    res.json({
      ok: true,
      data: users,
      error: null,
    });
  });
});

router.get("/users/:id", async (req, res) => {
    User.find({
            _id:req.params.id
    }).then((users) => {
      res.json({
        ok: true,
        data: users,
        error: null,
      });
    }).catch(err=>{
        res.status(400).json({
            ok: true,
            data: null,
            error: err,
          });
    });
  });

module.exports = router;
