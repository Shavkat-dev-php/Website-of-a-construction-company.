<?
namespace Local\PhpInterface;

class Asset {
    protected static $instance = null;

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function addJs($script) {
        // JavaScript fayli mavjudligini tekshirish
        $filePath = $_SERVER["DOCUMENT_ROOT"] . htmlspecialchars($script);
        if (file_exists($filePath)) {
            // JavaScript faylini qo'shish
            echo '<script src="' . htmlspecialchars($script) . '"></script>';
        } else {
            // Fayl mavjud emasligi haqida xabar berish
            error_log("JavaScript fayli topilmadi: " . $filePath);
            echo '<script>console.error("JavaScript fayli topilmadi: ' . htmlspecialchars($script) . '");</script>';
        }
    }
}
